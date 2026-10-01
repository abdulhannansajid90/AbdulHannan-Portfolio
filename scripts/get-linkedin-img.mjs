import fs from 'fs';

async function fetchLinkedIn() {
  try {
    const res = await fetch('https://www.linkedin.com/in/abdul-hannan-110251386', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9'
      }
    });

    console.log('HTTP Status:', res.status);
    const html = await res.text();
    fs.writeFileSync('scripts/linkedin.html', html);
    console.log('Saved html len:', html.length);

    // Look for image urls in meta tags or img tags
    const ogImgMatch = html.match(/<meta\s+property=["']og:image["']\s+content=["']([^"']+)["']/i) ||
                       html.match(/<meta\s+content=["']([^"']+)["']\s+property=["']og:image["']/i);

    if (ogImgMatch && ogImgMatch[1]) {
      console.log('Found og:image:', ogImgMatch[1]);
      await downloadImage(ogImgMatch[1]);
      return;
    }

    const licdnMatches = html.match(/https:\/\/[^"'\s<>]+media\.licdn\.com\/dms\/image\/[^"'\s<>]+/g);
    if (licdnMatches && licdnMatches.length > 0) {
      console.log('Found media.licdn match:', licdnMatches[0]);
      await downloadImage(licdnMatches[0]);
      return;
    }

    console.log('No direct image found in public HTML. Checking other matches...');
    const allImgMatches = html.match(/https:\/\/[^"'\s<>]+\.(?:jpg|jpeg|png|webp)[^"'\s<>]*/gi);
    if (allImgMatches) {
      console.log('Other image matches:', allImgMatches.slice(0, 5));
    }
  } catch (err) {
    console.error('Error:', err);
  }
}

async function downloadImage(url) {
  const cleanUrl = url.replace(/&amp;/g, '&');
  console.log('Downloading from:', cleanUrl);
  const imgRes = await fetch(cleanUrl);
  if (imgRes.ok) {
    const buffer = Buffer.from(await imgRes.arrayBuffer());
    fs.writeFileSync('public/avatar.jpg', buffer);
    console.log('Successfully saved to public/avatar.jpg, size:', buffer.length);
  } else {
    console.log('Download failed status:', imgRes.status);
  }
}

fetchLinkedIn();

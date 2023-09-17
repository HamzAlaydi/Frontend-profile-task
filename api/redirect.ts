export default function handler(req: any, res: any) {
  res.writeHead(307, { Location: `https://${req.headers.host}${req.url}` });
  res.end();
}

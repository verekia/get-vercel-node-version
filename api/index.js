module.exports = (req, res) => {
  res.json({
    body: process.version,
  })
}

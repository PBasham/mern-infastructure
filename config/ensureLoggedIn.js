module.exports = function( req, res, next ) {
    // Statu code of 401 is Unauthorized
    if (!req.user) return res.status(401).json("Unauthorized")
    next()
}
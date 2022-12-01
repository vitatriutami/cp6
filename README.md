// =====================


*express-generate ==view-ejs


// =====================


// --- MODEL ---

Association between user & bio: one to one -> 
 foreignKey: 'bioId',

Association between user & history: one to many ->
 foreignKey: 'historyId'


// --- Detail view ---
usergame/detail
/ kombinasi display:
 bio &
 history

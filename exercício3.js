use('class');
db.superheroes.find(
  { "aspects.height": { $lte: 180 } }
).count();
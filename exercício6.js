use('class');
db.superheroes.find(
  { "aspects.height": { $gte: 180 } }
).count();

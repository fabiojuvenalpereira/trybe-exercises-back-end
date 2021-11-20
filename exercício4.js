use('class');
db.superheroes.find(
  { "aspects.height": { $gte: 200 } }
).limit(1);
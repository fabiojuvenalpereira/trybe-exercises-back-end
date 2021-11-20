use('class');
db.superheroes.find(
  { "aspects.height": { $gte: 191 } }
);
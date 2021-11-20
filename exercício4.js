use('class');
db.superheroes.find(
  { "aspects.height": { $gt: 200 } }
).limit(1);
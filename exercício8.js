use('class');
db.superheroes.find(
  { "aspects.eyeColor": "blue"}
).count();
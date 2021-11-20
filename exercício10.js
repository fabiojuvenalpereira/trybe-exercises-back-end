use('class');
db.superheroes.find(
  { "aspects.hairColor" : {$in: ["Black", "No Hair"]}}
).count();
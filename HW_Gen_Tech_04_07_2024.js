//1.В рамках БД social_network выведите данные о трех произвольных реакциях
//на публикации (проекция: оценка, имяавторареакции, заголовок_публикации)

db.posts.aggregate([
    { $sample: { size: 3 } },
    { $project: { reaction: 1, author_name: 1, publication_title: 1 } }
])
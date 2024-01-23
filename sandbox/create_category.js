const models = require("../models")

async function createCategory() {
  console.log("models.Category:", models.Category)
  const category = models.Category.build({ name: "test1" })
  await category.save()
}

createCategory()

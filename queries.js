const { Business, sequelize } = require('./models')
const { Op } = require('sequelize')

const stringify = (data) => {
  console.log(JSON.stringify(data, null, 2))
}

const findAll = async () => {
  const businesses = await Business.findAll()
  return stringify(businesses)
}

const findByPk = async (id) => {
  // id = 17
  const business = await Business.findByPk(id)
  return stringify(business)
}

const findOne = async () => {
  const business = await Business.findOne({
    where: {
      rating: 5
    }
  })
  return stringify(business)
}

const create = async () => {
  let newBusiness = {
    name: "Roger Miller Restaurant",
    address: "941 Bonifant St",
    rating: 5
  }
  const business = await Business.create(newBusiness)
  return stringify(business)
}

const update = async () => {
  let currBusiness = {
    name: "Roger Miller Restaurant",
  }
  let updateBusiness = {
    name: "BBQ House",
  }
  const business = await Business.update(updateBusiness, {where: currBusiness})
  return stringify(business)
}

const destroy = async () => {
  let currBusiness = {
    name: "BBQ House",
  }
  const business = await Business.destroy({where: currBusiness})
  return stringify(business)
}

async function main() {
  try {
    // await findAll()
    // await findByPk(17)
    // await findOne()
    // await create()
    // await update()
    // await destroy()
  } catch (error) {
    console.log(error)
  } finally {
    await sequelize.close()
  }
}

main()

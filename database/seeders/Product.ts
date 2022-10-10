import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Product from 'App/Models/Product'

export default class extends BaseSeeder {
  public async run() {
    await Product.updateOrCreateMany(
      ['title', 'category'],
      [
        {
          title: 'Apple Iphone 14',
          id: 1,
          brand: 'Apple',
          userId: 2,
          category: 'Mobile',
          price: 100000,
          description: `Longest battery life ever. A new Main camera and improved image processing let you capture even more sensational shots in all kinds of light — especially low light. Whether you’re filming while hiking up a rocky trail or chasing your kids through the park, try Action mode for smooth handheld videos. Safety features including emergency SOS via satellite, crash detection call for help when you can't.
          `,
        },
        {
          title: 'Samsung Galaxy S22',
          id: 2,
          brand: 'Samsung',
          userId: 1,
          category: 'Mobile',
          price: 120000,
          description: `Comes with Voice Focus, Vapour Cooling Chamber, Auto Data Switching and up to 16GB RAM. 6nm Dimensity 900 processor, Voice Focus, Vapour Cooling Chamber and up to 16GB RAM. 120Hz refresh rate. 5000mAh Battery. 6nm Octa-core processor. 6000mAh Battery.`,
        },
        {
          title: 'Refrigrator',
          id: 3,
          brand: 'Samsung',
          userId: 3,
          category: 'Home Appliances',
          price: 220000,
          description: `Comes with Voice Focus,  cbv nbxckmslm  cvhdbcjdcnslkmz 5000mAh Battery. 6nm Octa-core processor. 6000mAh Battery.`,
        },
        {
          title: 'Philips Iron',
          id: 4,
          brand: 'Philips',
          userId: 5,
          category: 'Appliances',
          price: 2000,
          description: 'cvhdghjclksjakx,mnsxb nmzxxlsdiwoeugfusiislxvb cgvhsdksjaswk xhcjskdj',
        },
        {
          title: 'Television',
          id: 5,
          userId: 3,
          brand: 'Sony',
          category: 'Home Appliances',
          price: 320000,
          description: `Comes with Voice Focus, vchsbdkjsldk;sx vcgdhcjksksl 6000mAh Battery.`,
        },
      ]
    )
  }
}

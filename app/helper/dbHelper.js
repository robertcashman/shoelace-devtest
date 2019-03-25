TEMPLATE_ID = {
  SINGLE_IMAGE_AD: 'Single Image Ad',
  CAROUSEL_AD: 'Carousel Ad'
};

REPEAT = {
  DAILY: 'daily',
  WEEKLY: 'weekly',
  MONTHLY: 'monthly'
};

let myDb = [
  {
    customerId: 1,
    name: 'someName1',
    templatedId: TEMPLATE_ID.SINGLE_IMAGE_AD,
    startDate: new Date(),
    repeat: REPEAT.DAILY
  },
  {
    customerId: 2,
    name: 'someName2',
    templatedId: TEMPLATE_ID.CAROUSEL_AD,
    startDate: new Date(),
    repeat: REPEAT.WEEKLY
  },
  {
    customerId: 3,
    name: 'someName3',
    templatedId: TEMPLATE_ID.SINGLE_IMAGE_AD,
    startDate: new Date(),
    repeat: REPEAT.MONTHLY
  }
];

const dbHelper = {
  get: (id) => {
    return myDb.filter((customer)=>{
      return customer.customerId == id;
    });
  },
  add: (customerId,name,templatedId,startDate,repeat) => {
    //validate all feilds have a value
    if(customerId == undefined || name == undefined || templatedId == undefined || startDate == undefined || repeat== undefined){
      console.log("Can not create client because missing required feilds");
      return false;
    }
    //validate templatedId and repeat are one of the given ENUMS
    let ENUMcheckTemplateId = false;
    Object.keys(TEMPLATE_ID).forEach(key => {
      let value = TEMPLATE_ID[key];
      if(templatedId.toUpperCase() == value.toUpperCase()){
        ENUMcheckTemplateId = true;
      }
    });
    let ENUMcheckRepeat = false;
    Object.keys(TEMPLATE_ID).forEach(key => {
      let value = TEMPLATE_ID[key];
      if(templatedId.toUpperCase() == value.toUpperCase()){
        ENUMcheckRepeat = true;
      }
    });
    if(ENUMcheckTemplateId == false || ENUMcheckRepeat == false){
      console.log("Can not create customer because TemplateId or Repeat field did not match required ENUM");
      return false;
    }
    let newCustomer = {
      customerId: customerId,
      name: name,
      templatedId: templatedId,
      startDate: startDate,
      repeat: repeat
    };
    myDb.push(newCustomer);
    return true;
  },
  delete: (id) => {
    myDb = myDb.filter((customer)=>{
      return customer.customerId != id;
    });
  }
};

module.exports = dbHelper;

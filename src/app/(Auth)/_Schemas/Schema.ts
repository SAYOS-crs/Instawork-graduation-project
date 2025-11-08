import * as zod from 'zod'

export const LogInScheme = zod.object({
  
    phoneNumber : zod.string()
      .nonempty('phoneNumber is required')
      .regex(/^(\+201|01|00201)[0-2,5]{1}[0-9]{8}$/, 'phoneNumber is InValid'),
    password : zod.string()
      .nonempty('password is required')
      // .regex( /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/ , 'password is InValid'),
    
  })

export const RegisterScheme = zod.object({
    name : zod.string()
      .nonempty('name is required')
      .min(3 , 'name must be more thin 3 char')
      .max(20 , 'name must be less thin 20 char'),
    email : zod.string()
      .nonempty('email is required')
      .regex(/^[\w\.-]+@[\w\.-]+\.\w{2,}$/ , 'email is valid'),
    phoneNumber : zod.string()
      .nonempty('phone Number is required')
      .regex( /^(\+201|01|00201)[0-2,5]{1}[0-9]{8}$/ , 'phone Number is invalid'),
    password : zod.string()
      .nonempty('password is required'),
      // .regex( /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/ , 'password is invalid'),
    rePassword : zod.string()
      .nonempty('Repassword is required'),
    gender : zod.string()
      .nonempty('gender is required'),
    dateOfBirth: zod.coerce.date('date is required')
      .refine( (value)=> {
        const userDate = value.getFullYear();
        const nowDate = new Date().getFullYear();
        const age = nowDate - userDate
        return age >= 13 } , 'age must be +13' ),
    
  }).refine( (data)=>  data.password === data.rePassword  , { path : ['rePassword'] , message : 'repassword not matched with password '} )

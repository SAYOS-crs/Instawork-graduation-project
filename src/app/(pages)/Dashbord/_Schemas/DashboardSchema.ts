import * as zod from 'zod'

export const DashBoardSchema = zod.object({
        Fullname : zod.string()
            .nonempty('name is required')
            .min(3 , 'name must be more thin 3 char')
            .max(20 , 'name must be less thin 20 char'),
        PhoneNumber : zod.string()
            .nonempty('phone Number is required')
            .regex( /^(\+201|01|00201)[0-2,5]{1}[0-9]{8}$/ , 'phone Number is invalid'),
        SecondPhoneNumber : zod.string()
            .nonempty('phone Number is required')
            .regex( /^(\+201|01|00201)[0-2,5]{1}[0-9]{8}$/ , 'phone Number is invalid'),
        email : zod.string()
            .nonempty('email is required')
            .regex(/^[\w\.-]+@[\w\.-]+\.\w{2,}$/ , 'email is valid'),
})


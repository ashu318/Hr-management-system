

## CREATE LEAVE BY THE USER

Once the users is created by the HR/Admin , then the Levace balance si assigned to that perticular users after the createion .
amnd in the leave a[ply form]

step1
users fill the form and hit the submit
2
APi get the infor from the frontedn and validate by 
            -Invalid date range
            -Tokjen validayation
            -Fetch the leave balace for that perticular users and Comopaere the reuirest
            -Then One Transcataion is occures having `leaveApplication.create` and `leaveBalance.update`
            -Sending The responsice






## FETCH LEAVES BALANCE FOR THE USER
One the users is logged is use fet the api `/api/leaves/myleaves-balance` and get all the leave balaance


## APPLY LEAVE BY THE USERS
one After Login users willl gteh the leave apply page and On seleceetion the date and leave type and desc. will send to the backend

and in the bacledn will get the dataand validate

step 1 :
Token  checna dvalidayte
2.also check other valodataion
3. fethc the `prisma.leaveBalance.findUnique` leave balace for that userts
4.if satifay all the condition then map one transactaaion
    -Create the `leaveApplication.create` applicataion records
    -Update in the `leaveBalance.updateOne`



## USERS ALL LEAVES RECORDS
On going to the Leaves All
1.Fetch requirest is going to the backend 
2.Token Varifyed
3.Finf  all `leaveApplication.findMany` Leave Applictaaions with Desceing order
4.Send resondce to the freonten



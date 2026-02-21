
## CREATE LEAVE BY THE USER
    Once a user is created by the HR/Admin, the leave balance is assigned to that particular user after account creation.

    FRONTEND:--
        -The user fills out the leave application form.
        -Clicks on Submit.

    BACKEND:--
        -The API receives the data from the frontend and performs the following validations:
            -Token validation
            -Invalid date range check
            -Fetch leave balance for the particular user
            -Compare requested leave days with available balance

        If all validations pass, a single transaction occurs:
            -<leaveApplication.create> → Create leave application record
            -<leaveBalance.update> → Update leave balance
            -Sending Responce



## FETCH LEAVES BALANCE FOR THE USER
    One the users is logged is use fet the api `/api/leaves/myleaves-balance` and get all the leave balaance

    FRONTEND:--
        -Useeffects Runs and Api Called

    BACKEND:--
        -The backend fetches and returns all leave balances for that uses with all the validation:
        -Token Varificataion
        -Get the `UserId` From the Token After Decoded
        -Fetch `LeaveBalance` for current Year Only
        -Sending the responce to the frontend



## USERS ALL LEAVES RECORDS 
    One the users is logged in and get the My All leaves page one `Fetch` Request will hit to the backend

    FRONTEND:--
        -Useeffects Runs and Api Called

    BACKEND:--
        -The backend fetches and returns all leave Applicataion Records for that uses with all the validation:
        -Token Varificataion
        -Get the `UserId` From the Token After Decoded
        -Fetch `leaveApplication.findMany` for current User
        -Make it formatting for Desending Order 
        -Sending the responce to the frontend




## UPDATE THE LEAVE STATUS BY THE ADMIN/HR
    Onec the ADMIN/HR Will open the All Leave Applictaion Tab , seeing all the requested Aplicataion by all the uses.
    Check The leave and Maked as {Approved , Rejected , Pending}

    FRONTEND:--
        -For Admin Only list all the applictions
        -And Onselecting the Status from the dropdown
        -will `PATCH` Request will hit with the {leaveId}
        -Update the status aftre , Getting the responce from the API

    BACKEND:--
        -The backend fetches and returns all leave Applicataion Records for that uses with all the validation:
        -Token Varificataion
        -Get the `UserId` From the Token After Decoded
        -Fetch `leaveApplication.findUnique` 
        -Update `leaveApplication.update`
        -Sending the responce to the frontend update Leave `leave: updatedLeave`.



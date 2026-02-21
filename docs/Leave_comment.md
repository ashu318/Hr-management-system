## CREATE LEAVE COMMENT
    The leave Comment module is created for conversataion with the Employee and Admin/Hr.
    Once the Leave will applied by the employee it is shaved in the db and the other things are performed thats well

    FRONTEND:--
        -On the My Application page , users will click the `Open Comment` Tab
        -Write the Message to the Admin /Hr

    BACKEND:--
        -The API receives the data from the frontend and performs the following validations:
        -Token Varificataion
        -`Leave_id` from the Frontend
        -Get the Messgae from the Frontedn
        -Find the `Leave_Application ` fro that perticular leave id
        -Only allowed the Authozied User who have the leave applictaion or ADMIN to write the commonets
        -Create A commnet `leaveComment.create` with including the usres details
        -send the responce 200 OK



## FETCH LEAVE COMMENTS
    In the sidebar Section when The users will check the sidebar , it's get the leave applictaion id from the parent components
    as `data={selectedLeave}`

    FRONTEND:--
        -Get the `Leave_applictaion` Id from the Parent tabel
        -Hit one Useeffect to fetch the commnets by parsing `${data.id}`
        -and then The responce will append on the `setComments` states
        -Marking the Fist notes and commnets during the apply of the leave by the user.

    BACKEND:--
        -The API receives the data from the frontend and performs the following validations:
        -Token Varificataion
        -Get `Leave_Id` from {Params}
        -Check the `leave_applictaion` existsnace {leaveApplication.findUnique}
        -Permission Check || Only accesibile by the Authorizsed user `leave.userId !== userId && userRole !== "ADMIN"`
        -Fetch Commnets from the Database `leaveComment.findMany` with including [Users deatils] and Format to Descending order.
        -Include the First Commennt with the EXISTSING Comment objcet 
        -Sending `comments` to the FrontEnd 200 OK

    
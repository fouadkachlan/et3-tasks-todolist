export type userProps = {
    email_Address: string;
    Password: string;
    phone_Number: string;
    user_Country: string;
}

export type User =  {
    email_Address: string;
    Password: string;
}


export type userFetchDataProps = {
    email_Address: string;  
    phone_Number : string;
    user_Country : string;
}

export type News = { 
    news_Wrote_by: string;
    date_Of_News : string;
    News: string;
}
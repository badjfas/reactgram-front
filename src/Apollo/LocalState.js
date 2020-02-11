export const defaults={
    isLogin: localStorage.getItem("token") !== null ? true : false
};

export const resolvers={
    Mutation:{
        logUserIn: (_,{token},{cache}) => {
            localStorage.setItem("token",token)
            cache.writeData({
                data:{
                isLogin:true
                }
            });
            return null;
        },
        logUserOut:(_,__,{cache}) => {
            localStorage.removeItem("token");
            window.location.reload();
            return null;
        }
    }
};
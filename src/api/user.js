import request from '@/utils/request';

const moduleUrl = '/user';

const user = {
    // 查询某个用户的详细信息
    getUserInfo(data) {
        return request(`${moduleUrl}/getUserInfo`, data);
    },
    login(userId, password) {
        return request(`${moduleUrl}/login`,{userId, password} );
    },
    addUser(userId, password) {
        return request(`${moduleUrl}/addUser`,{userId, password} );
    },
    
};

export default user;

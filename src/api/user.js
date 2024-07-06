import request from '@/utils/request';

const moduleUrl = '/user';

const user = {
    // 查询某个用户的详细信息
    getUserInfo(data) {
        return request(`${moduleUrl}/getUserInfo`, data);
    },
    getQRCodeDetail(qrcodeName) {
        return request(`${moduleUrl}/detail`, { qrcodeName });
    }
};

export default user;

import request from "./http"
import params from "./params"
import mock from "@/mock/mock"
// console.log(mock);

// axios.get('/user?ID=12345')


console.log(params);
var url1="/json1811.ashx";
class Apls{
	joke(data){
		return request({
			method:"get",
			url:"/joke",
			params:data
		})
	}

	GetBannerList(data){
		return request({
			method:"get",
			url:url1,
			params:data
		})
	}
	mockTest(){
		return mock.get("/login", {
			params: {
			  name: 12345
			}
		  })
	}
}


export default new Apls();
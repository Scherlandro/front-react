import {ApiException} from "./api/ApiException";
import {Api} from "./api/ApiConfig";
import {IUser} from "../interfaces/user";

export const AuthenticUsers=()=>{}
/*
export const  AuthenticUsers = () => async (dispatch, getState) => {

  try {
      let USER_DETAILS_REQUEST;
      dispatch({
          type: USER_DETAILS_REQUEST
      });
      const {userLogin: {userInfo}} = getState();

      const authRequestAxios = axiosInstance(userInfo, dispatch)
      const {data} = await authRequestAxios.get(`/api/v1/users/${userInfo._id}/`);
      let USER_DETAILS_SUCCESS;
      dispatch({
          type: USER_DETAILS_SUCCESS,
          payload: data,
      });
      localStorage.setItem('userDetails', JSON.stringify(data));
  } catch (error) {
      dispatch({ // USER FURTHER INFORMATION FAILED
          type: USER_DETAILS_FAILED,
          payload: error.response && error.response.data.detail ? error.response.data.detail : error.message,
      });
  }


}

 */
import {getApi,postApi,putApi,deleteApi} from "@/utils/Api.js";

export class Api  {

  static get(url,payload) {

    return getApi(url,payload)

  }

  static post(url,payload) {

    return postApi(url,payload)

  }

  static put(url,payload) {

    return putApi(url,payload)

  }

  static delete(url,payload) {

    return deleteApi(url,payload)

  }


}

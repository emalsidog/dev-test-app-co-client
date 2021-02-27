export default class usersService {

	_baseUrl = "https://appco-dev-test-server.herokuapp.com"

  getResourse = async (url) => {
    const response = await fetch(`${this._baseUrl}${url}`);
    if (!response.ok) {
      throw new Error(`Could not fetch ${url}, received ${response.status}`);
    }
    const responseJSON = await response.json();
    return responseJSON;
	};
	
	getPeople = async (page) => {
		const response = await this.getResourse(`/stats?page=${page}`);
		return response;
  }
  
  getPersonStats = async (id, from = "2019-10-03", to = "2019-10-09") => {
    const response = await this.getResourse(`/stats/${id}?from=${from}&to=${to}`);
    return response;
  }
}

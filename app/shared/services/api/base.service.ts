const env = {
 Chave: ""
}

export const BaseService = (envVar:keyof typeof env):string =>{
  const interVariavel = env[envVar];

  if(typeof interVariavel === 'undefined'){
    throw new Error(`You must define ${env[envVar]} enviroment varible before using it `)
  }
  return interVariavel;



  // constructor(public postfixUrl:String) {
  //   this.url = environment.API_PATH+'api/'+postfixUrl
  // }

  // setUpHeaders() {
  //   return {
  //     headers: new HttpHeaders({'Content-Type': 'application/json' })
  //   // headers = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded','No-Auth':'True' })
  //   }
  // }
}


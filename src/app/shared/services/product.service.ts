
import {ApiException} from "./api/ApiException";
import {Api} from "./api/ApiConfig";
import {IProduto} from "../interfaces/product";


  const getAll = async (): Promise<IProduto[] | ApiException> => {
    try {
      const { data } = await Api().get('/produtos/all');
      return data;
    } catch (error: any) {
      return new ApiException(error.message || 'Erro ao buscar os registros.');
    }
  };


const getById = async (id: number): Promise<IProduto | ApiException> => {
  try {
    const { data } = await Api().get(`/produtos/${id}`);
    return data;
  } catch (error: any) {
    return new ApiException(error.message || 'Erro ao consultar o registro.');
  }
};

const create = async (dataToCreate: IProduto): Promise<IProduto | ApiException> => {
  try {
    const { data } = await Api().post<any>('/produtos/salvar', dataToCreate);
    return data;
  } catch (error: any) {
    return new ApiException(error.message || 'Erro ao criar o registro.');
  }
};

const updateById = async (id: number, dataToUpdate: IProduto): Promise<IProduto | ApiException> => {
  try {
    const { data } = await Api().put(`/produtos/${id}`, dataToUpdate);
    return data;
  } catch (error: any) {
    return new ApiException(error.message || 'Erro ao atualizar o registro.');
  }
};

const deleteById = async (id: number): Promise<undefined | ApiException> => {
  try {
    await Api().delete(`/produtos/${id}`);
    return undefined;
  } catch (error: any) {
    return new ApiException(error.message || 'Erro ao apagar o registro.');
  }
};



/*
  getTodosProdutos(): Observable<IProduto[]> {
    return this._http.get<IProduto[]>(this.baseUrl+'all');
  }

  getListarTodos(): Observable<any> {
    return this._http.get(this.baseUrl)
      .pipe(map(response => response));
  }

  getProdutoPorCod(id: string): Observable<any> {
    //return this._http.get<IProduto[]>(`${this.baseUrl}/${id}`);
    return this._http.get(this.baseUrl + id)
      .pipe(map(response => response));
/!*   .pipe(map((res: ProdutoModel_T[]) => res));
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length   *!/
  }

  searchByName(valor: string): Observable<IProduto[]> {
    return this._http.get<IProduto[]>(this.baseUrl+'buscarPorNome?nome_produto='+valor)
      .pipe(map((resp:IProduto[]) => resp ));
    /!* this.baseUrl + 'products?name_like=' + valor);   *!/
  }


  search(valor: string): Observable<IProduto[]> {
    return this._http.get<IProduto[]>(this.baseUrl + valor);
  }

  createElements(element: IProduto): Observable<IProduto> {
    return this._http.post<IProduto>(this.baseUrl+'salvar',element);
  }

  editElement(element: IProduto): Observable<IProduto> {
    return this._http.put<IProduto>(this.baseUrl+'editar', element);
  }

  delete(id:number):Observable<IProduto>{
   return  this._http.delete<IProduto>(this.baseUrl+'delete/'+id);
  }
}
*/

export const ProductService ={
  getAll,
  create,
  getById,
  updateById,
  deleteById,
}

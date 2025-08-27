export default function trataErro(erro){
    if(erro.code === 'ENOENT'){
        throw new Error('Arquivo não encontrado');
    }else{
        throw new Error('Ocorreu um erro inesperado');
    }
}

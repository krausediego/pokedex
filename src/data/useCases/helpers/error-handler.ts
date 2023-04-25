export type Result = {
  errors: any;
};

export const errorHandler = (
  err: Result['errors'],
  statusCode = 500,
): Result => {
  if (statusCode >= 400 && statusCode < 500) {
    if (statusCode === 403)
      return { errors: ['Sessão expirada. Faça login novamente!!!'] };
    const errorsList = err.response.data?.errors || [];
    return {
      errors: errorsList
        ?.map((error: any) => `- ${error.mensagem}`)
        ?.slice(0, 10),
    };
  }
  return {
    errors: ['Opss! Desculpe não foi possível processar a operação.'],
  };
};

import {apiConfig, PublicApi} from '@humanitec/autogen';

export type HumanitecClient = PublicApi

export const createApiClient = (basePath: string, token: string): PublicApi => {
  const config = apiConfig({
    token,
    apiHost: `https://${basePath}`,
    internalApp: 'preview-envs-action/latest',
  });

  return new PublicApi(config);
};

import {UseFetchOptions} from '#app'
import {FetchError} from 'ofetch'
import {AvailableRouterMethod, NitroFetchRequest} from 'nitropack'
import {AsyncData, KeysOf, PickFrom} from '#app/composables/asyncData'
import {Ref} from 'vue'
import {FetchResult} from '#app/composables/fetch'

export declare function useFetch<ResT = void, ErrorT = FetchError, ReqT extends NitroFetchRequest = NitroFetchRequest, Method extends AvailableRouterMethod<ReqT> = ResT extends void ? 'get' extends AvailableRouterMethod<ReqT> ? 'get' : AvailableRouterMethod<ReqT> : AvailableRouterMethod<ReqT>, _ResT = ResT extends void ? FetchResult<ReqT, Method> : ResT, DataT = _ResT, PickKeys extends KeysOf<DataT> = KeysOf<DataT>, DefaultT = null>(request: Ref<ReqT> | ReqT | (() => ReqT), opts?: UseFetchOptions<_ResT, DataT, PickKeys, DefaultT, ReqT, Method>): AsyncData<PickFrom<DataT, PickKeys> | DefaultT, ErrorT | null>;

export const useApiFetch = <TResult = void>(endpoint: string, options: UseFetchOptions<TResult>) => {
  const config = useAppConfig()
  return useFetch<TResult>(`/api/${endpoint}`, {
    baseURL: config.apiBaseURL,
    ...options as any,
  })
}

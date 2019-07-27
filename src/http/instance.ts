import axios, { AxiosPromise } from "axios";
import { compose } from "redux";
import { Observable } from "rxjs";

export const http = axios.create({
    baseURL: "http://www.deathblind.com/wp-json/wp/v2"
});

const axiosToObservable = <T>(promise: AxiosPromise<T>): Observable<T> => {
    return new Observable<T>(observer => {
        promise
            .then(({ data }) => observer.next(data))
            .then(() => observer.complete());
        promise.catch(error => observer.error(error));

        return observer;
    });
};

export const get = <T>(url: string): Observable<T> =>
    compose(
        promise => axiosToObservable(promise),
        (u: string) => http.get<T>(u)
    )(url);

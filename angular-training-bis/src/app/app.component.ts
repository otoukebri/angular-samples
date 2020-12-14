import { Component, OnInit } from '@angular/core';
import { of, Subject, timer, from } from 'rxjs';
import { map, mergeMap, delay, mergeAll, switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit /*, OnChanges*/ {

  ngOnInit() {

    const subject = new Subject();
    subject.subscribe(() => console.log('value!!'));

    // exp2
    const source = timer(1000, 2000);
    const subscribe = source.subscribe(val => console.log(val));
    setTimeout(() => { subscribe.unsubscribe(); }, 10000);

    // exp3
    const observable = of('apple', 'orange', 'grappe');
    const observer = {
      next: (x: string) => console.log('Observer got a next value: ' + x),
      error: (err: string) => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),
    };

    // observable.subscribe(observer);
    // observable.subscribe();

    const getData = (param) => {
      return of(`retrieved new data with param ${param}`).pipe(
        delay(1000)
      );
    };

    // using a regular map
    // from([1, 2, 3, 4]).pipe(
    //   map(param => getData(param))
    // ).subscribe(val => val.subscribe(data => console.log(data)));

    // // using map and mergeAll
    // from([1, 2, 3, 4]).pipe(
    //   map(param => getData(param)),
    //   mergeAll()
    // ).subscribe(val => console.log(val));

    // // using mergeMap
    // from([1, 2, 3, 4]).pipe(
    //   mergeMap(param => getData(param))
    // ).subscribe(val => console.log(val));

    // switch map
    // using switchMap
    from([1, 2, 3, 4]).pipe(
      switchMap(param => getData(param))
    ).subscribe(val => console.log(val));

  }


}

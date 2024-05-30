import { Component, OnInit } from '@angular/core';
import { PersonApiService } from './service/api.service';
import { Person } from './model/person';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Angular HTTP POST request to JSON back-end server';
  people: Person[];
  person = new Person(null, "");

  constructor(private apiService: PersonApiService) { }

  ngOnInit() {
    this.refreshPeople()
  }

  refreshPeople() {
    this.apiService.getPeople()
      .subscribe(data => {
        console.log(data);
        this.people = data;
      })

  }

  addPerson() {
    if(this.person.name == ""){
      alert ("Il nome della persona non può essere vuoto. \nSpecificare!");
      return;
    }
    this.apiService.addPerson(this.person)
      .subscribe(data => {
        this.person = data;
        this.refreshPeople();
        this.person.name = "";
      })
      console.log("Sono qui");
    }
}
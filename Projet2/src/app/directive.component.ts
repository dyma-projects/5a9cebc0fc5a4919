import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})

export class DirectiveComponent implements OnInit {
  @Input()  public inDirective: string;
  @Output() eventDirective = new EventEmitter<string>();

  public statut: boolean = true;
//  public texts = ['Un', 'Deux', 'Trois'];
  public texts: Array<string> = ['Un', 'Deux', 'Trois'];

  constructor() { }

  Envoyer(valeur: string) {
    this.eventDirective.emit(valeur);
  }

  Paragraphe(): void {
      this.statut = !this.statut;
  }

  ngOnInit() {
  }

}

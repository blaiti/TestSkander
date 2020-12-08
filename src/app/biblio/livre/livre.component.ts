import { Component, OnInit, Input } from '@angular/core';
import { Livre } from '../../mymodel/livre';

@Component({
  selector: 'skan-livre',
  templateUrl: './livre.component.html',
  styleUrls: ['./livre.component.css']
})
export class LivreComponent implements OnInit {

  constructor() { 
    
  }

  ngOnInit(): void {
  }

  @Input("livre") l: Livre;
  @Input() length: number;

  onAfficher()
  { 

  }
}

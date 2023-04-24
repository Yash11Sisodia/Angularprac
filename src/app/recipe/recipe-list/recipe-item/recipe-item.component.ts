import { Component } from '@angular/core';
import { recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
public recipes : recipe[] = [ new recipe("name","desc","url"),new recipe("name2","desc2","url2")];
constructor(){

}
}

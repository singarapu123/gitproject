import { Component } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import ArrayStore from 'devextreme/data/array_store';
import { ListService } from '../list.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  tasks: DataSource;

  selectAllModeValue = 'page';

  selectionModeValue = 'all';

  selectByClick = false;

  constructor(service: ListService) {
    this.tasks = new DataSource({
      store: new ArrayStore({
        key: 'text',
        data: service.getTasks(),
      }),
    });
  }
}




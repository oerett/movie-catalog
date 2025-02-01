import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
  standalone: false,
})
export class ToolbarComponent {
  @Output() toggleSidebar = new EventEmitter<void>(); 

  onToggleSidebar() {
    this.toggleSidebar.emit(); 
  }
}

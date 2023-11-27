import { ComponentFixture, TestBed, waitForAsync, tick, fakeAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { DialogComponent } from './dialog.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations'

describe('DialogComponent', () => {
  let component: DialogComponent;
  let fixture: ComponentFixture<DialogComponent>;
  let matDialogRefMock: MatDialogRef<DialogComponent>;

  beforeEach(waitForAsync(() => {
    matDialogRefMock = jasmine.createSpyObj('MatDialogRef', ['close']);

    TestBed.configureTestingModule({
      imports: [DialogComponent, FormsModule, MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule, NoopAnimationsModule],
      providers: [
        { provide: MatDialogRef, useValue: matDialogRefMock },
        { provide: MAT_DIALOG_DATA, useValue: { title: 'Test' } }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should close the dialog with false when Cancel button is clicked', () => {
    const cancelButton = fixture.nativeElement.querySelector('#btn-cancel');
    cancelButton.click();

    expect(matDialogRefMock.close).toHaveBeenCalledWith(false);
  });

  it('should close the dialog with the entered name when Add button is clicked', () => {
    component.name = 'Johny Bravo';
    fixture.detectChanges();

    const addButton = fixture.nativeElement.querySelector('#btn-add');
    addButton.click();

    expect(matDialogRefMock.close).toHaveBeenCalledWith({ name: 'Johny Bravo' });
  });

  it('should disable the Add button when name is empty', () => {
    const addButton = fixture.nativeElement.querySelector('#btn-add');
    expect(addButton.disabled).toBeTruthy();

    component.name = 'Johny Bravo';
    fixture.detectChanges();

    expect(addButton.disabled).toBeFalsy();
  });
});
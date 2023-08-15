import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/compat/firestore/';

function emailOrPhoneRequired(control: AbstractControl): { [key: string]: boolean } | null {
  const email = control.get('email')?.value;
  const phone = control.get('phone')?.value;

  if (!email && !phone) {
    return { emailOrPhoneRequired: true };
  }

  return null;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public isExpanded = false;
  activeSection: string | null = 'header';

  contactForm: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', [Validators.email]],
    phone: ['', [Validators.pattern('[- +()0-9]{6,}')]],
    message: ['', Validators.required]
  }, { validators: [emailOrPhoneRequired] });

  private equiryForm: AngularFirestoreCollection<any> = this.firestore.collection('equiry');
  public submitted = false;
  public submission_error = false;
  constructor(
    private firestore: AngularFirestore,
    private viewportScroller: ViewportScroller,
    private formBuilder: FormBuilder) { }

  sections = ['header', 'about', 'classes', 'testimonials', 'contact'];

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.email]],
      phone: ['', [Validators.pattern('[- +()0-9]{6,}')]],
      message: ['', Validators.required]
    }, { validators: [emailOrPhoneRequired] });
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    this.updateActiveSection();
  }

  submitForm(): void {
    this.submitted = false;
    this.submission_error = false;
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;
      console.log('formData', formData);

      this.equiryForm.add(this.contactForm.value).then(res => {
        console.log('Data Added', res);
      })
        .catch(err => {
          console.log(err);
          this.submission_error = true;
        })
        .finally(() => {
          this.submitted = true;
          this.submission_error = false;
        })
      // this.contactService.sendEmail(formData).subscribe(
      //   (response: any) => {
      //     console.log('Email sent successfully:', response);
      //     // Show success message to user
      //   },
      //   (error: any) => {
      //     console.error('Error sending email:', error);
      //     // Show error message to user
      //   }
      // );
      this.submitted = true;
    } else {
      console.log(this.contactForm.errors)
      this.submission_error = true;
    }
  }

  updateActiveSection() {
    for (const sectionId of this.sections) {
      const section = document.getElementById(sectionId);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 50 && rect.bottom >= 50) {
          this.activeSection = sectionId;
          console.log('action section', this.activeSection)
          break;
        }
      }
    }
  }


  expandDetail() {
    this.isExpanded = !this.isExpanded;
  }

  scrollToSection(sectionId: string): void {
    this.viewportScroller.scrollToAnchor(sectionId);
  }

}

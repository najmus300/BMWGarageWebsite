// import video from "./video";
import React from "react";
import CarModel from "./CarModule";
import Header from "./Header";

function App() {
  return (
    <div>
      <Header />
      <div className="container mx-auto flex justify-center mt-16 text-7xl text-blue-700">
        BMW
      </div>
      <div className="container mx-auto flex justify-center pl-80 text-7xl">
        DESIGN
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "90vh",
        }}
      >
        <CarModel />
      </div>
      <div className="container mx-auto flex justify-center mt-16 text-5xl text-blue-700">
        About Us
      </div>
      <div className="pt-8 container mx-auto flex justify-center">
        Changing Lanes is the official podcast from BMW. In these audio series,
        <br />
        we take you with us on new journeys through the BMW universe. Find
        <br /> out more about sustainability, innovation, technology, mobility
        and the
        <br />
        latest trends. You can find and subscribe to Changing Lanes on all
        <br /> major podcast platforms, so tune in!
      </div>

      <div className="container mx-auto flex justify-center mt-40 text-5xl text-blue-700">
        Our Videos
      </div>

      {/* <video/> */}
      <div>
        <img
          className="w-full mt-8"
          src="https://s3-alpha-sig.figma.com/img/3fb4/9baa/e5a0d12007ea104ab75763a68c5a0fb3?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cdL1MveTgsEOYUsW0KdO8dFHfljUnkRjNWzRPpC8WFWQqKTwJBjmeZHqd31lT78-cTAhnGOenG4YfliTekv--7hDO3C4Yw4oh0hGZz~U5VXCtWX8YCy0ZMZqMMGZMZOqTgVtoEqpu1O31DYVN0~XNWC5JPVZW8rIMj0ZzWI2H3P9IzKQlvCCwPusHbH6xSbikCqsZjFAL6VxCgnvDO2QCwTieg1BpCae-EleVKuMg7Kvlh7wnxmlImXIsUc4yEzL0Gmh8igr62KCMSbKzIJnceQbnezyvMOsQmQd9CdTMPQVRxl9Ptk0nAcWO8h6ere0rH0JzrBigywevwOmBc4Y7Q__"
          alt="Your Image"
        />
      </div>

      <div className="flex container mx-auto">
        <div className="flex-col w-1/3">
          <h1 className="text-9xl pt-60 text-blue-700">Our</h1>

          <h1 className="text-9xl pl-24">CARS</h1>
        </div>

        <div className="w-2/3">
          <img
            className="w-full mt-8"
            src="https://s3-alpha-sig.figma.com/img/6b1f/7646/31fb56f8f73b57b6433b490ca5584390?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=c-xciyt5jXRAPSDqwFdRZ~ZIfNhlZUSyTRexpr3ti2epaaD46xVa8LgUrNTIzj-w6p-Wrm~KUGsTZ2XB~DzTYX5eTkqvAppzr2nGEaUr7hMK-N3RTtTl3l1Gew3Pf7gYxJ3DWBqsZXBXK5CGskg8FryMZxWtfMFbOXPjjnuPFFB~rqMzT9PZ1~od6p4xzX2Vum2Kw11SSU6rAuUoSCUXUorFlIa-et1KNZ6u~sbqI-zbdVME6JHzSUXOB8M4YLeOYwmvNT3I-iM-k6rnjbx~cN8l3PFo5IozdvzDATgzvZF8DTo7gh0xHMLl1UNNaO5quVGT1sCV162qbStgSyWV4Q__"
            alt="Your Image"
          />
        </div>
      </div>

      <div className="container mx-auto flex justify-center mt-40 text-5xl text-blue-700">
        Bmw Collections
      </div>

      <div class="grid grid-rows-3 grid-flow-col gap-4">
        <div>
          <img
            className="w-full mt-8"
            src="https://s3-alpha-sig.figma.com/img/4506/72e9/1e5df49995d2b0b0ecc55b1fecdbb17a?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Jtcd34rMAtpO4YcHZgEtuSq-W1m0YzsGecuRXCP0dncqnCrQchVfDjC0NwizMxY7B-IbyRDIy2taC-~uIRfQ5gMlfO56uXj627cRr3pxsafQUlMb~lJyaUsHBsttBbX7YzAwvbJyVjGsS5FXT7tsKIgC8LAih7q-hLCPFGSJOICVQQqm5IhGAluVkc2DZiQbrfOn7BPn9lukILLK2PkQljGfR8WZDB-OQJWe9TSxjN3lm607HUhyTz0UJ4MDBRAet-l00tfYFqn-LfhP7M3H7Hy7b233SadLtcju8o8oavXXO0Enpv0srQAuQKDbT5aHJEN4qwayLpZT3irWpWCRkg__"
            alt="Your Image"
          />
        </div>
        <div>
          {" "}
          <img
            className="w-full mt-8"
            src="https://s3-alpha-sig.figma.com/img/5152/659f/3ea52891507d5410edf52cc5f8162073?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eF-55ywvBLZRWYnqDYq7i58kGd10x7W0-NutpQ6XUsXgiLBgHVytNEoKYH2FqZn2ATcRilyXGRXd4lcymH0VO8riqOMWIo5a~Zp5SmFD9iiX1WEfbSTyW2Ye8Mn5l02Ow6O5JXAcSEAr0CugTUoH5xE6SudaM0e9eca9YUbkEZtKxLtQfrDySk5iPzaFCkB9WAxU6x9GeNr3pQJS4t7xESQQZmQ~z4CvBeQ180zJkNN4saW0VtHMPzvABPJqsVCz46iSWjR~mGyC9OO9AbjikoUqKnFLwPbHsFhNUZ6v9hz-CWT66Ekpl4boLtYdwI8L6V~RQn5nGHsDi9nGWTpwsw__"
            alt="Your Image"
          />
        </div>
        <div>
          {" "}
          <img
            className="w-full mt-8"
            src="https://s3-alpha-sig.figma.com/img/e85e/81dc/b4a10efbddc7f5fd6f726d4f7b8f98f4?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D0OAuFR9z~0FTrdL3YBpGjID~XhDGgIqQbEo1RUfrKJ~iuRHFPVWVqqqAOJXvzFSy5rAgZiawh6UAPs3WtbUn1~1gvmAG7jttMOB2ohV-eE2uQkiKF0yxQFCrcWcOkEliQRAEzDxHXlKLGkgMCAmzUM4lzhcwvAVTnXGeHX9xzYFC-Iida9EDx7iF8YdCI~tS6uMrJTX46mGVEXDNWIoiBchFZV6zayziRM~3pPkVtHmYGMmyeXraoJSTQMyVyQktx9cGPGknuhT3avSKr5G9d5qxQ9g9DlxfUWpfZiW6cW8CoWBb49B80Tr18pjBN4rvHaMaiw1Fjz-qfEsO53ZjA__"
            alt="Your Image"
          />
        </div>
        <div>
          {" "}
          <img
            className="w-full mt-8"
            src="https://s3-alpha-sig.figma.com/img/01d2/c205/617172d1a556beef6e8405c0410dd94d?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EfZ8dYFJKyk7yKQMmqBWqZBkYTUKSUG-quybnLRk6D6ZmNZMf~vzWP1rhJJp1KXEhUsT4Cnq9yNq~6Wg4M6vmtJ6N3DjBiKunlxAmbqY3NVzl9EehJ4-JemIF0MCqvDEqghOPMymJmVxxYann26i0M-9DbX~9g60gcXrF4CMYhlgCIfnE2n6qskQs3z9u5uh~TErXpVRZ0sNE6Xg~6zBdbXAPGyOcVz0RT2AnpHwg0eVNYsz2bxwvvCpYqTLGMmBey3GY0EmN19t1otaenkcx4CYvzGHe7eAXry55afo4ot21DwmReU7KoYzPIzCuBKmg6KSp0Lf42KVGe3GtkrOEQ__"
            alt="Your Image"
          />
        </div>
        <div class="grid grid-rows-subgrid gap-4 row-span-2">
          <div class="row-start-2">
            {" "}
            <img
              className="w-full mt-8"
              src="https://s3-alpha-sig.figma.com/img/3a1a/8a4f/a2e5f97b6030352e9a4de714e4872bb4?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mnsFaS0IV6-Y3~numGhyPnNmAacs1S2pa3F7UFiuhg5-2352zPmYqSC5R4M8f7C~nl-AEcIyxEc8xchpXZVgrdqDONrvGw6BSUnpyPwI4q5ZBfKZX7oCj0QQx3kjedd0JmZc1tLxsw2R2PKTkPdzEA-xXMLriLuvjiW7PdrPf2DBwZwsxHNNbTe-KaS96RjEoS3ToZElCGfCABFVw62nofFITL-PUcHWUCb--WP8z0ya-l8f4I9mhqoJFaOpPuIIbW2ICkrWzHgbMzr6IJCtJblQcY12wHFBSMsJT1UMHTru1sdT~mb42JpMmAEhAdGgynCHNWXSYgsr7tSnmCMKcw__"
              alt="Your Image"
            />
          </div>
        </div>
        <div>
          {" "}
          <img
            className="w-full mt-8"
            src="https://s3-alpha-sig.figma.com/img/7740/b45b/0b8ee4fd4e1e3704307c884f2cc82ff6?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OBiRDO15erQgiDnCGsdIYU~WRA4-W7Q~b6rM3fpOBq1glaY7bwjV6dly0hV0txyKqHqIaZdSmnfaFKtB-tY-HzsIpG~LynZQzVmgVoxTTGDxiR9n37Hdiq5QfEESW~1~g~2eLuik5Rlq3JJf0LPXaSCKtgaZFN7mgxKE-Gi6MrGus6aLmxsSuRs9GEU4m7zpEWbSaL1FeFITL9W6d7~K6mIdQrzFq-Mv3cuVEPs8L4z5q8x3zpDhjvv32e4F9nf~HVL95ikom12rW12D9Qkr0YHkPBBhp5d9psODP1W2ZMvRfNy47zn3TZGibCt~nTGRZpwMYrUNwiyq0i2LJfhQUg__"
            alt="Your Image"
          />
        </div>

        <div>
          {" "}
          <img
            className="w-full mt-8"
            src="https://s3-alpha-sig.figma.com/img/c687/1689/393bb08ffc6b1615880990e28d3f9dc5?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dmAXKX-erhjRLoDXWubB3EQGrLRA7eRIShJujy7hoYpn16q2bf02ujMNlH-YuiKIWmLiUzIFiPFCnRSmEAmzNzNmE4mGKAl86ZMp5CgJAk8wxnzAHnNmTThBQ51xKJ88sdglpC1KP~~E4AhWhFoLXIKvf8~lNDGKBaZITd78pKwhELKigpSm-mCP4h7m1vynbti10R5Uj9tddafif-waC8hNgb3iAI0MxsOYt5qubVF0pC2g8fu1mItVQ-lNG~VTi-4GkYIPQI82V7ONAjZRnzSThBj3pZGMQjBhbmDXJkxK9UaY~2oNyoDAOEvQVXIWRCtI3mJslAlWCnWSlb05Zw__"
            alt="Your Image"
          />
        </div>
        <div>
          {" "}
          <img
            className="w-full mt-8"
            src="https://s3-alpha-sig.figma.com/img/7328/289c/3ee2a775a8ce16ee19fd29b3c20e45ec?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZaEByyDXz-rbJyMOdBlZbeqsUpn~TPmTGGNsPmB~oNhx6lw5EME5eJfQ~ytAHksG~pFKu9pRLA2B1rGnBlyG3L4cTAw2uECy2VPDo~cqNgJE755I5dVYZNt-uD7kxFy5vpfYfVgoRIw5NjpENI5jlJ7c9Ivqm5a6GibWV8Iv0hRlM-Qk9UQMdzw7uXNIMJlxGbCY9vZ70fstl~YFWc7EA5kzu-tQdK0c5D4S9BIndhHT2KRkOlahQnrYt6fBDaICkVZ1rqBOFbqeqn~96lgztrwiONXCfaU3sdikmpNtTAR1Q6UqyDqIokROkc4yVZ2Bpk~5sTva1lgZ7TT4q-PTPA__"
            alt="Your Image"
          />
        </div>
      </div>



      <div className="container mx-auto flex justify-center mt-60 text-5xl text-blue-700">
      Bmw Forever 
      </div>
      <div className="pt-8 container mx-auto flex justify-center pl-20 pr-20 text-xl pb-60">
      Life has many unforgettable moments in store for us. Some, we think back on fondly; others, less so.
       But every one of them is unique. That is why a BMW is more than just a method of transportation. It is a companion that 
       creates space for emotion and allows us to feel the joy which lives within every single moment.
Dive into the emotional farewell drive in this video, and discover exclusive 
behind-the-scenes recordings from the film production.
      </div>

      <div className="w-full p mx-auto flex justify-center mt-60 text-xl p-8 bg-black text-white">
      2023 Mike Delsing | All visuals belong to their respective owners.
      </div>


    </div>
  );
}

export default App;

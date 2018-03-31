<template>
  <!-- viewbox settings width="1500px" height="760px" viewBox="-60 -78 300 180" -->
    <div class="svg-container">
      <svg  id="aptiv-logo" version="1.1" viewBox="-60 -78 300 180" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <title>aptiv-logo</title>
        <desc>Created with Sketch.</desc>
        <defs></defs>
        <g id="Symbols" stroke="none" width="100px" stroke-width="1" fill="none" fill-rule="evenodd">
          <g>
            <g class="aptiv-logo">
              <g  id="circles">
              <circle cx="4" cy="10" r="4" stroke="none" fill="#F84018" />
              <circle cx="167" cy="10" r="4" stroke="none" fill="#F84018" />
              </g>
              <g id="dots">
                <path id="left-dot"
                  d="M166.950111,6 C164.713466,6
                  162.900523,7.79074267 162.900523,10
                  C162.900523,12.2092573 164.713466,14
                  166.950111,14 C169.186756,14 171,12.2092573
                  171,10 C171,7.79074267 169.186756,6 166.950111,6 Z" fill="#F84018">
                </path>
                <path id="right-dot"
                  d="M8.0994766,10 C8.0994766,12.2092573 6.28623291,14
                  4.04958762,14 C1.81324369,14 0,12.2092573 0,10 C0,7.79074267
                  1.81324369,6 4.04958762,6 C6.28623291,6 8.0994766,7.79074267
                  8.0994766,10 L8.0994766,10 Z" fill="#F84018">
                </path>
              </g>
              <g id="letters">
                <path id="letter-v"
                  d="M130.808086,0 L136.716175,0
                  L140.812061,16.5773056
                  L142.147067,16.5773056
                  L146.212865,0 L152,0
                  L145.961931,22 L136.875942,22
                  L130.808086,0 Z" fill="#000000">
                </path>
                <path id="letter-i"
                  d="M112.037056,22
                  L117.68037,22 L117.68037,0 L112.037056,0
                  L112.037056,22 Z" fill ="#000000">
                </path>
                <path id="letter-t" d="
                  M98.8560841,5.05327778
                  L92.3627827,5.05327778 L92.3627827,22
                  L86.7188668,22 L86.7188668,5.05327778
                  L80.2571578,5.05327778 L80.2571578,0
                  L98.8560841,0 L98.8560841,5.05327778 Z" fill="#000000">
                </path>
                <path id="letter-p-overlay" d="
                  M61.6898239,0 C66.817128,0 69.7898271,2.65008333
                  69.7898271,7.24105556 C69.7898271,11.89375
                  66.817128,14.60525 61.6898239,14.60525
                  L56.9560715,14.60525 L56.9560715,22 L51.3127573,22
                  L51.3127573,0 L61.6898239,0 Z" fill="#000000">
                </path>
                <path id="letter-p" d="
                  M60.9607905,9.70627778 C63.1758726,9.70627778
                  64.0252581,8.90480556 64.0252581,7.33363889
                  C64.0252581,5.76216667 63.1758726,4.99155556
                  60.9607905,4.99155556 L56.9560715,4.99155556
                  L56.9560715,9.70627778 L60.9607905,9.70627778 Z" fill="#ffffff">
                </path>
                <path id="letter-a" d="
                  M40.5114493,22
                  L34.8982232,22
                  L33.3210078,16.2995556
                  L26.0384969,16.2995556
                  L24.4919712,22
                  L19,22 L25.4926997,0
                  L34.0181478,0
                  L40.5114493,22
                  L40.5114493,22 Z" fill="#000000">
                </path>
                <path id="letter-a-overlay" d="
                  M27.2522487,11.8011667
                  L32.0771679,11.8011667
                  L30.3468043,5.42361111
                  L29.0127003,5.42361111
                  L27.2522487,11.8011667 Z" fill="#ffffff">
                </path>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>
</template>
<script>
export default {
  name: 'aptiv-loader',
  data () {
    return {
    }
  }
}
</script>
<style>

@keyframes dropletters {
  0% {transform: translateY(-100px);}
  25% {opacity: 0.1; transform: translateY(-50px);}
  100% {opacity: 1; transform: translateY(0px);}
}

@keyframes raiseletters {
  0% {transform: translateY(100px);}
  25% {opacity: 0.1; transform: translateY(50px);}
  100% {opacity: 1; transform: translateY(0px);}
}

@keyframes scalefadedots {
  0% { transform: scale(1); opacity: 1; }
  100% { transform: scale(3); opacity: 0; }
}
@keyframes rotatecircles {
  0% { transform: rotate(0deg);}
  100% { transform: rotate(180deg);}
}
#circles {
  opacity: 0;
  animation: raiseletters 1s ease-out 1.6s 1 normal forwards;
  transform-origin: 85px 10px;
}
#right-dot {
  opacity: 0;
  transform-origin: 4px 10px;
  animation: scalefadedots 1.5s ease-out 3s infinite normal forwards;
}
#left-dot {
  opacity: 0;
  transform-origin: 167px 10px;
  animation: scalefadedots 1.5s ease-out 3s infinite normal forwards;
}
/*#dots {
  opacity: 0;
  animation: fadedots 2s ease 3s infinite;
}*/
#letter-a-overlay, #letter-a, #letter-p-overlay, #letter-t, #letter-i, #letter-v {
  opacity: 0;
}
#letter-a-overlay, #letter-a {
  position: relative;
  animation: dropletters 1s ease-out 0s 1 normal forwards;
}
#letter-p-overlay, #letter-p {
  animation: raiseletters 1s ease-out 0.3s 1 normal forwards;
}
#letter-t {
  animation: dropletters 1s ease-out 0.6s 1 normal forwards;
}
#letter-i {
  animation: raiseletters 1s ease-out 0.9s 1 normal forwards;
}
#letter-v {
  animation: dropletters 1s ease-out 1.2s 1 normal forwards;
}
.svg-container {

}

</style>

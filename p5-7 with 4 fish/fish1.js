let particles = [];
let particles1 = [];
let particles2 = [];
let particles3 = [];


function newFish(){
 let w= random(0,width);
 let h =random(0,height);
  particles.push(new Particle(w/4, h/2-5)); //0 bottom
  particles.push(new Particle(w/4-10, h/2-20)); //1 left
  particles.push(new Particle(w/4-4, h/2-30)); //2 inside
  particles.push(new Particle(w/4-15, h/2-40)); //3 tail left
  particles.push(new Particle(w/4, h/2-35)); //4 top tail
  particles.push(new Particle(w/4+15, h/2-40)); //5 tail right
  particles.push(new Particle(w/4+4, h/2-30)); //6 inside
  particles.push(new Particle(w/4+10, h/2-20)); //7 right
  springs.push(new Spring(particles[0], particles[1], 0.01));
  springs.push(new Spring(particles[1], particles[2], 0.01));
  springs.push(new Spring(particles[2], particles[3], 0.01));
  springs.push(new Spring(particles[3], particles[4], 0.01));
  springs.push(new Spring(particles[4], particles[5], 0.01));
  springs.push(new Spring(particles[5], particles[6], 0.01));
  springs.push(new Spring(particles[6], particles[7], 0.01));
  springs.push(new Spring(particles[7], particles[0], 0.01));
  springs.push(new Spring(particles[0], particles[4], 0.05));
  springs.push(new Spring(particles[2], particles[6], 0.05));
  springs.push(new Spring(particles[1], particles[7], 0.05));
  springs.push(new Spring(particles[2], particles[0], 0.05));
  springs.push(new Spring(particles[6], particles[0], 0.05));
  springs.push(new Spring(particles[3], particles[7], 0.05));
  springs.push(new Spring(particles[1], particles[5], 0.05));
  springs.push(new Spring(particles[1], particles[4], 0.05));
  springs.push(new Spring(particles[4], particles[7], 0.05));
  springs.push(new Spring(particles[3], particles[5], 0.05));

  w= random(0,width);
  h =random(0,height);
  particles1.push(new Particle1(w/4, h/2-5)); //0 bottom
  particles1.push(new Particle1(w/4-10, h/2-20)); //1 left
  particles1.push(new Particle1(w/4-4, h/2-30)); //2 inside
  particles1.push(new Particle1(w/4-15, h/2-40)); //3 tail left
  particles1.push(new Particle1(w/4, h/2-35)); //4 top tail
  particles1.push(new Particle1(w/4+15, h/2-40)); //5 tail right
  particles1.push(new Particle1(w/4+4, h/2-30)); //6 inside
  particles1.push(new Particle1(w/4+10, h/2-20)); //7 right
  springs.push(new Spring(particles1[0], particles1[1], 0.01));
  springs.push(new Spring(particles1[1], particles1[2], 0.01));
  springs.push(new Spring(particles1[2], particles1[3], 0.01));
  springs.push(new Spring(particles1[3], particles1[4], 0.01));
  springs.push(new Spring(particles1[4], particles1[5], 0.01));
  springs.push(new Spring(particles1[5], particles1[6], 0.01));
  springs.push(new Spring(particles1[6], particles1[7], 0.01));
  springs.push(new Spring(particles1[7], particles1[0], 0.01));
  springs.push(new Spring(particles1[0], particles1[4], 0.05));
  springs.push(new Spring(particles1[2], particles1[6], 0.05));
  springs.push(new Spring(particles1[1], particles1[7], 0.05));
  springs.push(new Spring(particles1[2], particles1[0], 0.05));
  springs.push(new Spring(particles1[6], particles1[0], 0.05));
  springs.push(new Spring(particles1[3], particles1[7], 0.05));
  springs.push(new Spring(particles1[1], particles1[5], 0.05));
  springs.push(new Spring(particles1[1], particles1[4], 0.05));
  springs.push(new Spring(particles1[4], particles1[7], 0.05));
  springs.push(new Spring(particles1[3], particles1[5], 0.05));

  w= random(0,width);
  h =random(0,height);
  particles2.push(new Particle2(w/4, h/2-5)); //0 bottom
  particles2.push(new Particle2(w/4-10, h/2-20)); //1 left
  particles2.push(new Particle2(w/4-4, h/2-30)); //2 inside
  particles2.push(new Particle2(w/4-15, h/2-40)); //3 tail left
  particles2.push(new Particle2(w/4, h/2-35)); //4 top tail
  particles2.push(new Particle2(w/4+15, h/2-40)); //5 tail right
  particles2.push(new Particle2(w/4+4, h/2-30)); //6 inside
  particles2.push(new Particle2(w/4+10, h/2-20)); //7 right
  springs.push(new Spring(particles2[0], particles2[1], 0.01));
  springs.push(new Spring(particles2[1], particles2[2], 0.01));
  springs.push(new Spring(particles2[2], particles2[3], 0.01));
  springs.push(new Spring(particles2[3], particles2[4], 0.01));
  springs.push(new Spring(particles2[4], particles2[5], 0.01));
  springs.push(new Spring(particles2[5], particles2[6], 0.01));
  springs.push(new Spring(particles2[6], particles2[7], 0.01));
  springs.push(new Spring(particles2[7], particles2[0], 0.01));
  springs.push(new Spring(particles2[0], particles2[4], 0.05));
  springs.push(new Spring(particles2[2], particles2[6], 0.05));
  springs.push(new Spring(particles2[1], particles2[7], 0.05));
  springs.push(new Spring(particles2[2], particles2[0], 0.05));
  springs.push(new Spring(particles2[6], particles2[0], 0.05));
  springs.push(new Spring(particles2[3], particles2[7], 0.05));
  springs.push(new Spring(particles2[1], particles2[5], 0.05));
  springs.push(new Spring(particles2[1], particles2[4], 0.05));
  springs.push(new Spring(particles2[4], particles2[7], 0.05));
  springs.push(new Spring(particles2[3], particles2[5], 0.05));

  w= random(0,width);
   h =random(0,height);
  particles3.push(new Particle3(w/4, h/2-5)); //0 bottom
  particles3.push(new Particle3(w/4-10, h/2-20)); //1 left
  particles3.push(new Particle3(w/4-4, h/2-30)); //2 inside
  particles3.push(new Particle3(w/4-15, h/2-40)); //3 tail left
  particles3.push(new Particle3(w/4, h/2-35)); //4 top tail
  particles3.push(new Particle3(w/4+15, h/2-40)); //5 tail right
  particles3.push(new Particle3(w/4+4, h/2-30)); //6 inside
  particles3.push(new Particle3(w/4+10, h/2-20)); //7 right
  springs.push(new Spring(particles3[0], particles3[1], 0.01));
  springs.push(new Spring(particles3[1], particles3[2], 0.01));
  springs.push(new Spring(particles3[2], particles3[3], 0.01));
  springs.push(new Spring(particles3[3], particles3[4], 0.01));
  springs.push(new Spring(particles3[4], particles3[5], 0.01));
  springs.push(new Spring(particles3[5], particles3[6], 0.01));
  springs.push(new Spring(particles3[6], particles3[7], 0.01));
  springs.push(new Spring(particles3[7], particles3[0], 0.01));
  springs.push(new Spring(particles3[0], particles3[4], 0.05));
  springs.push(new Spring(particles3[2], particles3[6], 0.05));
  springs.push(new Spring(particles3[1], particles3[7], 0.05));
  springs.push(new Spring(particles3[2], particles3[0], 0.05));
  springs.push(new Spring(particles3[6], particles3[0], 0.05));
  springs.push(new Spring(particles3[3], particles3[7], 0.05));
  springs.push(new Spring(particles3[1], particles3[5], 0.05));
  springs.push(new Spring(particles3[1], particles3[4], 0.05));
  springs.push(new Spring(particles3[4], particles3[7], 0.05));
  springs.push(new Spring(particles3[3], particles3[5], 0.05));

}
class HomePage {
    /**
     * define selectors using getter methods
     */
get heading1 ()
 { return $('#ModelIntro-1');    }

get heading2 ()
 { return $('//a[@data-autoid="localSubMenu:links:overview"]');  }

get volvopara1 ()
{ return $('//*[@data-autoid="ModelIntro-2"]//section');   }

get heroimg1 ()
{ return $('//*[@data-autoid="Hero-1"]//picture')  }

get volvopara2 ()
{ return $('//*[@data-autoid="ModelIntro-3"]//section');   }

get volvopara2 ()
{ return $('//*[@data-autoid="ModelIntro-3"]//section');   }

get slidericon1 ()
{ return $('//button[@data-autoid="sliderWithIcons:title1"]'); }

get slidericon2 ()
{ return $('//button[@data-autoid="sliderWithIcons:title2"]');  }

get slidericon3 ()
{ return $('//button[@data-autoid="sliderWithIcons:title3"]')  }

get slidercard1 ()
{ return $('//button[@data-autoid="sliderWithIcons:title1"]'); }

get slidercard2 ()
{ return $('//button[@data-autoid="sliderWithIcons:title2"]');  }

get slidercard3 ()
{ return $('//button[@data-autoid="sliderWithIcons:title3"]');  }

get springcarouselleft ()
{ return $('[data-autoid="SpringCarouselArrow:left"]') }

get springcarouselright ()
{ return $('[data-autoid="SpringCarouselArrow:right"]') }

get springcarouselnext ()
{ return $('//*[@data-autoid="springCarouselNextButton"]') }

get springcarouselprev ()
{ return $('//*[@data-autoid="springCarouselPreviousButton"]') }

get productlisttitle ()
{ return  $('[data-autoid="productListCarousel:title"]'); }

get productlistitem ()
{ return  $('[data-autoid="productListCarouselItem-2"]'); }

get productlistlink1 ()
{ return  $('[data-autoid="productListCarouselItem:link1"]'); }

get productlistlink2 ()
{ return  $('[data-autoid="productListCarouselItem:link2"]'); }

    
}

export default new HomePage();
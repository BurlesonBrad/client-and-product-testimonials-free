# Client and Product Testimonials
Easy client and product testimonials for all WordPress sites


Features:
-------------------------------------
* 6 Different Shortcodes
* Frontend form to allow clients and customers to submit reviews from the front end of your site.
* Shortcode generator to place testimonials wherever you need with ease.
* Schema markup to increase visibility on Google and enhance on site SEO.
* Highly customizable.
* Easy Digital Downloads & WooCommerce integration - import your products from either plugin at the click of a button.

Shortcodes:
-------------------------------------
*	[testimonial-grid]
* 	[testimonial-list]
*	[testimonial-full-width]
*	[testimonial-submission-form]
* 	[testimonial-fade-slider] - *Slider*
*	[testimonial-thumbnail-slider] - *Slider*

Filters:
-------------------------------------
* ***capt_admin_menu_capabalities*** - alter who can view admin menu items, defualts to manage_options (admin only) - see https://codex.wordpress.org/Roles_and_Capabilities#Capabilities
* ***capt_post_type_public*** - alter weather or not the testimonials should appear on the front end in searches, defaults to false
* ***capt_filter_edd_import_query_args*** - filter the way that Easy Digital Downloads products get queried before an import - (alter WP_Query arguments - array) - see https://codex.wordpress.org/Class_Reference/WP_Query#Parameters
* ***capt_filter_wooc_import_query_args*** - filter the way that WooCommerce products get queried before an import (alter WP_Query arguments - array) - see https://codex.wordpress.org/Class_Reference/WP_Query#Parameters
* ***capt_custom_thank_you_message*** - filter the text that is displayed back to the user after a successful testimonial is submitted through the front end form.
* ***capt_submission_form_submit_button_text*** - filter text on the submit button of the front end submission form.
* ***client_and_product_testimonials_preloader*** - filter to alter the default preloader image URL entirely. To use a custom preloader you must pass a full URL.
* ***client_and_product_testimonials_preloader_number*** - filter to alter the default preloader image (bundled). Defaults to 1. (Possible 1-34).
* ***client_and_product_testimonials_font_family*** - filter to enqueue your own custom font family for the rating icon. This is generally used in conjunction with the next two filters, `client_and_product_testimonials_filled_icon_class` & `client_and_product_testimonials_empty_icon_class`.
* ***client_and_product_testimonials_filled_icon_class*** - filter to display a custom icon in place of the filled star. (default: 'dashicons dashicons-star-filled')
* ***client_and_product_testimonials_empty_icon_class*** - filter to display a custom icon in place of the empty star. (default: 'dashicons dashicons-star-empty')
* ***capt_content*** - custom content filter to parse testimonial content appropriately without having other plugins hook in by accident.
* ***client_and_product_testimonial_position_divider*** - Alter the divider between the client name and the position at the company. (default: /)
* ***client_and_product_testimonial_iframe_args*** - Alter the iframe arguments for video testimonials. (uses [https://codex.wordpress.org/Function_Reference/wp_oembed_get](wp_oembed_get()) to generate the iframe)
* ***client_and_product_testimonials_slider_query_args*** - Alter the query arguments for the slider. Alter things like number of annnouncements displayed in slider, etc. (see https://codex.wordpress.org/Class_Reference/WP_Query#Parameters)
* ***client_and_product_testimonials_list_query_args*** - Alter the query arguments for the list. (see https://codex.wordpress.org/Class_Reference/WP_Query#Parameters)
* ***client_and_product_testimonials_grid_query_args*** - Alter the query arguments for the grid. (see https://codex.wordpress.org/Class_Reference/WP_Query#Parameters)
* ***client_and_product_testimonials_full_width_query_args*** - Alter the query arguments for the full width (order defaults to random). (see https://codex.wordpress.org/Class_Reference/WP_Query#Parameters)
* ***client_and_product_testimonials_thumbnail_slider_query_args*** - Alter the query arguments for the thumbnail slider. (see https://codex.wordpress.org/Class_Reference/WP_Query#Parameters)

FAQ:
-------------------------------------

#### How are the testimonials ordered when displayed on the front end?
All shortcodes (with the exception of the full width shortcode) default to date in descending order - which basicailly means the newest testimonials will appear first.

The full width shortcode displays a single testimonial at random by defualt, on each page load.

You can alter the orderby and order paramters by passing in `order="ASC"` and `orderby="title"` parameters to any of the shortcodes. The testimonials would then display in ascending order, by title.

**Pro Tip:** Each shortcode is passed through a respective filter allowing you to alter any of the accepted WordPress `WP_Query()` arguments.

#### Is it possible to use my own preloader image?
Yes, infact it is. You'll want to pass a URL through the `client_and_product_testimonials_preloader` filter. The filter accepts one parameter, the URL to an external preloader image. It's best to use preloader images that are 32x32 in size. For specific help, please see our [documentation](http://captpro.evan-herman.com/documentation/).

#### Where did these awesome pre-loader animations come from?
The preloaders bundled with this plugin come from a variety of locations. All included preloaders carry a GPL or similar license and are free to use. For reference, the icons came from the following resources:
* [Mantas Bačiuška on Behanced](https://www.behance.net/gallery/13765711/GIF-Preloaders-(Free-Download))
* [Tympanus Freebie: Flat Style Squared Preloaders](http://tympanus.net/codrops/2014/04/25/freebie-flat-style-squared-preloaders/)
* [Hassan Alkhateeb on Behanced](https://www.behance.net/gallery/31234507/Free-Loading-GIF-Icons-Vol-1)
package com.bezkoder.springjwt.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
//import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.bezkoder.springjwt.security.jwt.AuthEntryPointJwt;
import com.bezkoder.springjwt.security.jwt.AuthTokenFilter;
import com.bezkoder.springjwt.security.services.UserDetailsServiceImpl;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class WebSecurityConfig  {
  @Autowired
  UserDetailsServiceImpl userDetailsService;

  @Autowired
  private AuthEntryPointJwt unauthorizedHandler;

  @Bean
  public AuthTokenFilter authenticationJwtTokenFilter() {
    return new AuthTokenFilter();
  }

//  @Override
//  public void configure(AuthenticationManagerBuilder authenticationManagerBuilder) throws Exception {
//    authenticationManagerBuilder.userDetailsService(userDetailsService).passwordEncoder(passwordEncoder());
//  }

  @Bean
  public DaoAuthenticationProvider authenticationProvider() {
      DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();

      authProvider.setUserDetailsService(userDetailsService);
      authProvider.setPasswordEncoder(passwordEncoder());

      return authProvider;
  }

//  @Bean
//  @Override
//  public AuthenticationManager authenticationManagerBean() throws Exception {
//    return super.authenticationManagerBean();
//  }

  @Bean
  public AuthenticationManager authenticationManager(AuthenticationConfiguration authConfig) throws Exception {
    return authConfig.getAuthenticationManager();
  }

  @Bean
  public PasswordEncoder passwordEncoder() {
    return new BCryptPasswordEncoder();
  }

//  @Override
//  protected void configure(HttpSecurity http) throws Exception {
//    http.cors().and().csrf().disable()
//      .exceptionHandling().authenticationEntryPoint(unauthorizedHandler).and()
//      .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()
//      .authorizeRequests().antMatchers("/api/auth/**").permitAll()
//      .antMatchers("/api/test/**").permitAll()
//      .anyRequest().authenticated();
//
//    http.addFilterBefore(authenticationJwtTokenFilter(), UsernamePasswordAuthenticationFilter.class);
//  }

  @Bean
  public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    http.cors().and().csrf().disable()
            .exceptionHandling().authenticationEntryPoint(unauthorizedHandler).and()
            .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()
            .authorizeRequests()
            .antMatchers("/api/auth/**").permitAll()
            .antMatchers("/api/auth/**").permitAll()
            .antMatchers("/api/auth/**").permitAll()
            .antMatchers("/api/test/**").permitAll()
            .antMatchers("/Produit/create").permitAll()
            .antMatchers("/Produit/read").permitAll()
            .antMatchers("/Produit/update/{id}").permitAll()
            .antMatchers("/Produit/delete/{id}").permitAll()
            .antMatchers("/Produit/upload-images").permitAll()
            .antMatchers("/facture/create").permitAll()
            .antMatchers("/facture/read").permitAll()
            .antMatchers("/facture/update/{id}").permitAll()
            .antMatchers("/facture/delete/{id}").permitAll()
            .antMatchers("/client/create").permitAll()
            .antMatchers("/client/read").permitAll()
            .antMatchers("/client/update/{id}").permitAll()
            .antMatchers("/client/delete/{id}").permitAll()
            .antMatchers("/calendrier/create").permitAll()
            .antMatchers("/calendrier/read").permitAll()
            .antMatchers("/fournisseur/create").permitAll()
            .antMatchers("/fournisseur/read").permitAll()
            .antMatchers("/fournisseur/update/{id}").permitAll()
            .antMatchers("/fournisseur/delete/{id}").permitAll()
            .antMatchers("/societeClient/create").permitAll()
            .antMatchers("/societeClient/read").permitAll()
            .antMatchers("/societeClient/update/{id}").permitAll()
            .antMatchers("/societeClient/delete/{id}").permitAll()
            .antMatchers("/societe/create").permitAll()
            .antMatchers("/societe/read").permitAll()
            .antMatchers("/societe/update/{id}").permitAll()
            .antMatchers("/societe/delete/{id}").permitAll()
            .antMatchers("/commande/create").permitAll()
            .antMatchers("/commande/read").permitAll()
            .antMatchers("/commande/update/{id}").permitAll()
            .antMatchers("/commande/delete/{id}").permitAll()
            .antMatchers("/commande/placecommande").permitAll()
            .antMatchers("/bonlivraisons/create").permitAll()
            .antMatchers("/bonlivraisons/read").permitAll()
            .antMatchers("/bonlivraisons/update/{id}").permitAll()
            .antMatchers("/bonlivraisons/delete/{id}").permitAll()
            .antMatchers("/BonCommande/create").permitAll()
            .antMatchers("/BonCommande/read").permitAll()
            .antMatchers("/BonCommande/update/{id}").permitAll()
            .antMatchers("/BonCommande/delete/{id}").permitAll()
            .antMatchers("/calendrier/read").permitAll()
            .antMatchers("/calendrier/create").permitAll()
            .antMatchers("/calendrier/delete/{id}").permitAll()
            .antMatchers("/register").hasRole("admin")
            .antMatchers("/admin/**").hasRole("admin") // Only allow "admin" role to access URLs starting with "/admin/"
            .anyRequest().authenticated();

    http.authenticationProvider(authenticationProvider());

    http.addFilterBefore(authenticationJwtTokenFilter(), UsernamePasswordAuthenticationFilter.class);

    return http.build();
  }

}
